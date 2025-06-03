import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <div className="flex items-center gap-3">
            <AppLogoIcon className="h-8 w-auto" />
            <span className="text-lg font-semibold">Dashboard</span>
        </div>
    );
}
