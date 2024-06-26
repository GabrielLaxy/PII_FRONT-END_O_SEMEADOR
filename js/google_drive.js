const GOOGLE_API_FOLDER_ID = '';

async function captura_url(numLinks) {
    try {
        const response = await gapi
            .client
            .drive
            .files
            .list(
                {q: `'${GOOGLE_API_FOLDER_ID}' in parents`, fields: 'files(name, webViewLink)'}
            );

        const files = response.result.files;
        const linksCapturados = [];

        for (let i = 0; i < Math.min(numLinks, files.length); i++) {
            const imagem = files[i];
            const linkDaImagem = imagem.webViewLink;
            linksCapturados.push(linkDaImagem);
        }

        if (files.length === 0) {
            console.log('Nenhum arquivo encontrado na pasta.');
        } else {
            console.log('Links capturados:', linksCapturados);

            const prefixo = 'https://drive.google.com/uc?export=view&id=';
            const links = linksCapturados.map(link => {
                const fileId = link.match(/\/d\/(.+?)\//)[1];
                return prefixo + fileId;
            });

            // console.log('Links concatenados:');
            // links.forEach((link, index) => {
            //     console.log(`Link${index + 1}:`, link);
            // });

            return links;

        }
    } catch (err) {
        console.log('Erro inesperado:', err);
        return [];
    }
}

gapi.load('client', () => {
    gapi
        .client
        .init(
            {apiKey:, discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']}
        )
        .then(() => {
            captura_url(9)
                .then(links => {
                    links.forEach((link, index) => {
                        const imagemElement = document.getElementById(`imagem-placeholder${index + 1}`);
                        if (imagemElement) {
                            imagemElement.src = link;
                        }
                    });
                })
                .catch(err => {
                    console.error('Erro ao capturar os links:', err);
                });
        });
});