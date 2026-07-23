/**
 * Mobile Operating System Detection
 */
export type MobileOS = 'iOS' | 'Android' | 'unknown';
/**
 * Detects the mobile operating system of the user
 * @returns The detected OS ('iOS', 'Android', or 'unknown')
 */
export declare function getMobileOperatingSystem(): MobileOS;
/**
 * Checks if device is mobile
 */
export declare function isMobileDevice(): boolean;
