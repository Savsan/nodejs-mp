const clientGoogle = {
    web: {
        client_id: '218493625924-vrimc347moo37psn25055cm6m1v9tkd3.apps.googleusercontent.com',
        project_id: 'nodejs-test-208619',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://accounts.google.com/o/oauth2/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_secret: 'xoCODFg7VUT1NamVTDiokEvo',
        redirect_uris: [
            'http://localhost:8080/auth/google/callback'
        ],
        javascript_origins: [
            'http://localhost:8080'
        ]
  }
};

export default clientGoogle;
