import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { createMuiTheme } from '@material-ui/core/styles';

// Import Fontawesome icons
library.add(faEllipsisH);
library.add(faUserCircle);

export default createMuiTheme({
    palette: {
        primary: {
            main: '#0091ea',
        },
        secondary: {
            main: '#4fc3f7',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                color: 'white',
                '&:hover': {
                    backgroundColor: 'purple'
                }
            }
        }
    },
    typography: {
        useNextVariants: true,
    }
});