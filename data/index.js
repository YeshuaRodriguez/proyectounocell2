import { indexPage } from "./pages/indexPage";


const commonData = {
    navigation: [
        { url: '/index.html', label: 'Inicio' },
        { url: '/about.html', label: 'Acerca de Nosotros' },
        { url: '/contact.html', label: 'Contáctanos' },
        { url: '/donations.html', label: 'Donaciones' },
        { url: '/faq.html', label: 'FAQ' },
        { url: '/gallery.html', label: 'Galería' },
        { url: '/help.html', label: 'Ayuda' },
        { url: '/programs.html', label: 'Programas' }
    ]
}

export const getPageContext = (pagePath) => {
    let pageData = {};
    switch (pagePath){
        case '../index.html':
            pageData = indexPage
            break;
    }
    return {
        ...commonData,
        ...pageData
    }
}