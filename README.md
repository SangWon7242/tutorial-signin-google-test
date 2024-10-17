# 파이어베이스를 이용한 구글 로그인

## 리액트 네이티브 설치(expo)

```bash
# expo-cli 설치
npm install -g expo-cli

# expo 프로젝트 세팅
expo init tutorial-signin-google-test
```

## 프로젝트에 필요한 라이브러리 설치

### Firebase 설치

```bash
npx expo install firebase
```

### 메트로 커스텀 구성

```bash
npx expo customize metro.config.js
```

### expo-auth-session, expo-crypto, expo-web-browser 설치

```bash
npx expo install expo-auth-session expo-crypto expo-web-browser
```

1. **expo-auth-session**

- `expo-auth-session`은 Expo 앱에서 OAuth 2.0 인증을 처리하는 라이브러리입니다.
- **주요 기능**:
  - OAuth 인증 처리
  - 인증 제공자와의 세션 및 토큰 교환 관리

2. **expo-crypto**

- `expo-crypto`는 암호화 관련 작업을 위한 라이브러리로, 앱 내에서 다양한 암호화 기능을 제공합니다
- **주요 기능**:
  - 해시 생성 (SHA-256, MD5 등)
  - 암호화 및 복호화
  - 무작위 값 생성

3. **expo-web-browser**

- `expo-web-browser`는 Expo 앱에서 외부 웹 브라우저를 열고 URL을 표시하는 기능을 제공합니다.
- **주요 기능**:
  - 외부 브라우저에서 URL 열기
  - 인앱 브라우저에서 페이지 표시
  - 인증 후 앱으로 돌아오는 기능 지원 (OAuth에서 많이 사용)

### expo-application 설치

- [expo-application 공식문서](https://docs.expo.dev/versions/latest/sdk/application/)

```bash
npx expo install expo-application
```

- 설치 이유
  - 앱에 대한 다양한 정보를 쉽게 가져오기 위해.
  - 앱의 이름, 버전, 빌드 넘버 같은 기본적인 정보부터, 디바이스가 어떤 운영체제를 사용하는지, 그리고 앱이 실행 중인지 등의 정보를 얻을 수 있습니다.

### expo-dev-client 설치

- [expo-dev-client 공식문서](https://docs.expo.dev/bare/install-dev-builds-in-bare/#install-expo-dev-client)

```bash
npx expo install expo-dev-client
```

- 사용 이유
  - expo-dev-client 라이브러리는 Expo 앱을 커스터마이징된 개발 환경에서 실행할 수 있도록 도와주는 라이브러리
- 주요 기능
  - 네이티브 모듈 통합
  - 맞춤형 개발 환경
  - 디버깅

### AsyncStorage 설치

- [AsyncStorage 공식문서](https://docs.expo.dev/versions/latest/sdk/async-storage/)

```bash
# React Native CLI
npm install @react-native-async-storage/async-storage
pod install

# Expo CLI
npx expo install @react-native-async-storage/async-storage
```

### AsyncStorage란?

`AsyncStorage`는 Expo 및 React Native에서 사용되는 비동기적 데이터 저장소입니다. 간단히 말해, **로컬 스토리지**처럼 작동하며, **키-값(key-value)** 쌍의 형태로 데이터를 영구적으로 저장할 수 있는 기능을 제공합니다. 이를 통해 앱을 종료하거나 다시 실행해도 저장된 데이터를 유지할 수 있습니다.

사용 이유:

- **사용자 설정 저장**: 예를 들어, 사용자가 앱에서 설정한 테마나 언어 선택과 같은 정보들을 저장하고 유지할 때 사용됩니다.
- **간단한 데이터 캐싱**: 서버에서 데이터를 받아와 캐싱해서, 네트워크 연결이 끊겼을 때도 그 데이터를 유지하고 보여줄 수 있습니다.
- **사용자 로그인 상태 유지**: 로그인 토큰이나 인증 정보를 저장해 앱이 다시 시작될 때 사용자 정보를 불러오고 로그인 상태를 유지할 수 있습니다.

### 메트로 번들 커스터 마이징

- [customizing-metro 공식문서](https://docs.expo.dev/guides/customizing-metro/)

```bash
# 템플릿 파일 생성
npx expo customize metro.config.js
```

#### metro.config.js 파일에 아래 코드 입력

```JS
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = config;
```

### EAS 사용법

- [EAS 공식문서](https://docs.expo.dev/tutorial/eas/configure-development-build/)

```bash
# 설치
npm install -g eas-cli

# 로그인
eas login

# 초기화
eas init

# eas 명령어 확인
eas

# eas 빌드를 위한 프로젝트 구성
eas build:configure
```
