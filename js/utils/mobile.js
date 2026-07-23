/**
 * Mobile Operating System Detection
 */
/**
 * Detects the mobile operating system of the user
 * @returns The detected OS ('iOS', 'Android', or 'unknown')
 */
export function getMobileOperatingSystem() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return 'iOS';
    }
    else if (/android/i.test(userAgent)) {
        return 'Android';
    }
    return 'unknown';
}
/**
 * Checks if device is mobile
 */
export function isMobileDevice() {
    return getMobileOperatingSystem() !== 'unknown';
}
//# sourceMappingURL=mobile.js.map