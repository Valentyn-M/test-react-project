import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize";
import App from './components/App/App'
import './index.css'
import { UserProvider } from './userContext';

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<UserProvider>
		<App />
	</UserProvider>
	// </StrictMode>,
)
