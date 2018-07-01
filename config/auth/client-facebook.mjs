const clientFacebook = {
    web: {
        facebook_app_id: '2101089570216231',
        facebook_app_secret: 'ae64e62234d1ff36dac0eca2d73c138c',
        redirect_uris: [
            'http://localhost:8080/auth/facebook/callback'
        ],
            'javascript_origins': [
            'http://localhost:8080'
        ]
    }
};

export default clientFacebook;
