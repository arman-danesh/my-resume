/**
 * Circular Progress Bars Component
 */
const DEFAULT_CONFIG = {
    speed: 15,
    endValues: [65, 75, 85],
    colors: {
        progress: '#dba507', // golden-500
        background: '#101a2b', // dark-700
    },
};
/**
 * Initialize and animate circular progress bars
 */
export function initializeProgressBars(config = {}) {
    const mergedConfig = { ...DEFAULT_CONFIG, ...config };
    const { speed = 15, endValues = [65, 75, 85], colors = DEFAULT_CONFIG.colors } = mergedConfig;
    const progressBars = document.getElementsByName('circular-progress');
    const valueContainers = document.getElementsByName('value-container');
    if (progressBars.length === 0) {
        console.warn('No progress bars found with name="circular-progress"');
        return;
    }
    progressBars.forEach((progressBar, index) => {
        if (index >= endValues.length) {
            return;
        }
        let progressValue = 0;
        const progressEndValue = endValues[index];
        const valueContainer = valueContainers[index];
        const progress = setInterval(() => {
            progressValue++;
            // Update value display
            if (valueContainer) {
                valueContainer.textContent = `${progressValue}%`;
            }
            // Update conic gradient
            if (progressBar instanceof HTMLElement) {
                const degree = progressValue * 3.6;
                progressBar.style.background = `conic-gradient(
          ${colors.progress} ${degree}deg,
          ${colors.background} ${degree}deg
        )`;
            }
            // Stop when reached end value
            if (progressValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    });
}
/**
 * Reset all progress bars to 0
 */
export function resetProgressBars() {
    const progressBars = document.getElementsByName('circular-progress');
    const valueContainers = document.getElementsByName('value-container');
    progressBars.forEach((progressBar, index) => {
        progressBar.style.background = `conic-gradient(
      ${DEFAULT_CONFIG.colors.progress} 0deg,
      ${DEFAULT_CONFIG.colors.background} 0deg
    )`;
        if (valueContainers[index]) {
            valueContainers[index].textContent = '0%';
        }
    });
}
//# sourceMappingURL=progressBars.js.map