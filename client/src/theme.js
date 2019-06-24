import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';

export default createMuiTheme({
	palette: {
		primary: pink,
		secondary: indigo // Indigo is probably a good match with pink
	}
});
