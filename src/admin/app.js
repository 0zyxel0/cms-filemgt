import AuthLogo from './extensions/sclogo.png';
import favicon from './extensions/scicon.png';

export default {
    config: {
        auth: {
            logo: AuthLogo,
        },
        head: {
          favicon: favicon,
        },
        menu: {
            logo: favicon,
        },
      translations: {
        en: {
          'Auth.form.welcome.title': 'Welcome to ScribbleCubes!',
          'Auth.form.welcome.subtitle': 'Log in to your account',
          'app.components.LeftMenu.navbrand.title': 'ScribbleCubes',
          'app.components.LeftMenu.navbrand.workplace': 'Dashboard'
        },
      },
    },
    bootstrap() {
      document.title = "ScribbleCubes"
    },
  };