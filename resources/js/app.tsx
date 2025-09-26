import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './route';
import './bootstrap';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>
);
