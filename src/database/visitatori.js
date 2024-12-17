const visitatori = [
    { 
        id: "V001_1", 
        codiceViaggio: "V001", 
        nome: "Luca", 
        cognome: "Rossi", 
        email: "luca.rossi@email.com", 
        numeroTelefono: "+39 345 6789101", 
        codiceFiscale: "RSSLCU85A01H501Z" 
    },
    { 
        id: "V001_2", 
        codiceViaggio: "V001", 
        nome: "Marco", 
        cognome: "Bianchi", 
        email: "marco.bianchi@email.com", 
        numeroTelefono: "+39 345 6789102", 
        codiceFiscale: "BNCMRC85A01H502Z" 
    },
    { 
        id: "V001_3", 
        codiceViaggio: "V001", 
        nome: "Giovanni", 
        cognome: "Verdi", 
        email: "giovanni.verdi@email.com", 
        numeroTelefono: "+39 345 6789103", 
        codiceFiscale: "VRDGVN85A01H503Z" 
    },
    { 
        id: "V001_4", 
        codiceViaggio: "V001", 
        nome: "Anna", 
        cognome: "Gialli", 
        email: "anna.gialli@email.com", 
        numeroTelefono: "+39 345 6789104", 
        codiceFiscale: "GLNNNA85A01H504Z" 
    },
    { 
        id: "V002_1", 
        codiceViaggio: "V002", 
        nome: "Simone", 
        cognome: "Rossi", 
        email: "simone.rossi@email.com", 
        numeroTelefono: "+39 345 6789105", 
        codiceFiscale: "RSSMNS85A01H505Z" 
    },
    { 
        id: "V002_2", 
        codiceViaggio: "V002", 
        nome: "Laura", 
        cognome: "Bianchi", 
        email: "laura.bianchi@email.com", 
        numeroTelefono: "+39 345 6789106", 
        codiceFiscale: "BNCLRA85A01H506Z" 
    },
    { 
        id: "V002_3", 
        codiceViaggio: "V002", 
        nome: "Francesco", 
        cognome: "Verdi", 
        email: "francesco.verdi@email.com", 
        numeroTelefono: "+39 345 6789107", 
        codiceFiscale: "FRNSCS85A01H507Z" 
    },
    { 
        id: "V002_4", 
        codiceViaggio: "V002", 
        nome: "Elena", 
        cognome: "Gialli", 
        email: "elena.gialli@email.com", 
        numeroTelefono: "+39 345 6789108", 
        codiceFiscale: "GLNENA85A01H508Z" 
    },
    { 
        id: "V003_1", 
        codiceViaggio: "V003", 
        nome: "Davide", 
        cognome: "Rossi", 
        email: "davide.rossi@email.com", 
        numeroTelefono: "+39 345 6789109", 
        codiceFiscale: "RSSDVS85A01H509Z" 
    },
    { 
        id: "V003_2", 
        codiceViaggio: "V003", 
        nome: "Federico", 
        cognome: "Bianchi", 
        email: "federico.bianchi@email.com", 
        numeroTelefono: "+39 345 6789110", 
        codiceFiscale: "BNCFDR85A01H510Z" 
    },
    { 
        id: "V003_3", 
        codiceViaggio: "V003", 
        nome: "Sara", 
        cognome: "Verdi", 
        email: "sara.verdi@email.com", 
        numeroTelefono: "+39 345 6789111", 
        codiceFiscale: "SRASRS85A01H511Z" 
    },
    { 
        id: "V003_4", 
        codiceViaggio: "V003", 
        nome: "Chiara", 
        cognome: "Gialli", 
        email: "chiara.gialli@email.com", 
        numeroTelefono: "+39 345 6789112", 
        codiceFiscale: "GLNCHR85A01H512Z" 
    },
    { 
        id: "V004_1", 
        codiceViaggio: "V004", 
        nome: "Paolo", 
        cognome: "Rossi", 
        email: "paolo.rossi@email.com", 
        numeroTelefono: "+39 345 6789113", 
        codiceFiscale: "RSSPL85A01H513Z" 
    },
    { 
        id: "V004_2", 
        codiceViaggio: "V004", 
        nome: "Monica", 
        cognome: "Bianchi", 
        email: "monica.bianchi@email.com", 
        numeroTelefono: "+39 345 6789114", 
        codiceFiscale: "BNCMNC85A01H514Z" 
    },
    { 
        id: "V004_3", 
        codiceViaggio: "V004", 
        nome: "Roberto", 
        cognome: "Verdi", 
        email: "roberto.verdi@email.com", 
        numeroTelefono: "+39 345 6789115", 
        codiceFiscale: "RBTBRT85A01H515Z" 
    },
    { 
        id: "V004_4", 
        codiceViaggio: "V004", 
        nome: "Maria", 
        cognome: "Gialli", 
        email: "maria.gialli@email.com", 
        numeroTelefono: "+39 345 6789116", 
        codiceFiscale: "GLNMRA85A01H516Z" 
    },
    { 
        id: "V005_1", 
        codiceViaggio: "V005", 
        nome: "Giorgio", 
        cognome: "Rossi", 
        email: "giorgio.rossi@email.com", 
        numeroTelefono: "+39 345 6789117", 
        codiceFiscale: "RSSGRG85A01H517Z" 
    },
    { 
        id: "V005_2", 
        codiceViaggio: "V005", 
        nome: "Francesca", 
        cognome: "Bianchi", 
        email: "francesca.bianchi@email.com", 
        numeroTelefono: "+39 345 6789118", 
        codiceFiscale: "BNCFNC85A01H518Z" 
    },
    { 
        id: "V005_3", 
        codiceViaggio: "V005", 
        nome: "Alessandro", 
        cognome: "Verdi", 
        email: "alessandro.verdi@email.com", 
        numeroTelefono: "+39 345 6789119", 
        codiceFiscale: "ALSSND85A01H519Z" 
    },
    { 
        id: "V005_4", 
        codiceViaggio: "V005", 
        nome: "Lucia", 
        cognome: "Gialli", 
        email: "lucia.gialli@email.com", 
        numeroTelefono: "+39 345 6789120", 
        codiceFiscale: "GLNLUC85A01H520Z" 
    },
    { 
        id: "V006_1", 
        codiceViaggio: "V006", 
        nome: "Paolo", 
        cognome: "Verdi", 
        email: "paolo.verdi@email.com", 
        numeroTelefono: "+39 345 6789121", 
        codiceFiscale: "PLVLPV85A01H521Z" 
    },
    { 
        id: "V006_2", 
        codiceViaggio: "V006", 
        nome: "Martina", 
        cognome: "Gialli", 
        email: "martina.gialli@email.com", 
        numeroTelefono: "+39 345 6789122", 
        codiceFiscale: "GLNMRT85A01H522Z" 
    },
    { 
        id: "V006_3", 
        codiceViaggio: "V006", 
        nome: "Carlo", 
        cognome: "Rossi", 
        email: "carlo.rossi@email.com", 
        numeroTelefono: "+39 345 6789123", 
        codiceFiscale: "CRLCRL85A01H523Z" 
    },
    { 
        id: "V006_4", 
        codiceViaggio: "V006", 
        nome: "Giulia", 
        cognome: "Bianchi", 
        email: "giulia.bianchi@email.com", 
        numeroTelefono: "+39 345 6789124", 
        codiceFiscale: "GLNGLI85A01H524Z"
     }
];

export default visitatori;
