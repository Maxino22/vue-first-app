import { CapacitorConfig } from '@capacitor/cli'
import path from 'path'

const config: CapacitorConfig = {
	appId: 'xyz.maxinovuememories',
	appName: 'Vue Memories app',
	webDir: 'dist',
	server: {
		androidScheme: 'https',
	},
}

export default config
