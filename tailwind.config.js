export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
        'xss-h': { raw: '(max-height: 324px)' },
        'xs-h': { raw: '(max-height: 434px)' },
        'sm-h': { raw: '(max-height: 639px)' },
        'md-h': { raw: '(max-height: 768px)' },
        'lg-h': { raw: '(max-height: 1024px)' },
        'xl-h': { raw: '(max-height: 1280px)' },
        '2xl-h': { raw: '(max-height: 1536px)' }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
