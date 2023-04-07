import './App.css';
import {MyComponent} from "./MyComponent";
import {IntlProvider} from 'react-intl';
import locale_ko from './locale/ko.json'
import locale_en from './locale/en.json'

const messages = {
    ko: locale_ko,
    en: locale_en,
}

const timeZones = {
    ko: 'Asia/Seoul',
    en: 'America/New_York',
    eu: 'Europe/London'
}

const locales = {
    ko: 'ko-KR',
    en: 'en-US'
}

function App() {
    const key = 'en';
  return (
    <div className="App">
        <IntlProvider locale={locales[key]} messages={messages[key]} timeZone={timeZones[key]}>
            <MyComponent />
        </IntlProvider>
    </div>
  );
}

export default App;
