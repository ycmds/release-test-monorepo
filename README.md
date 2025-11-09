# 🦠 MacroBE Monorepo

[![Tests](https://github.com/ycmds/release-test-monorepo/actions/workflows/release.yml/badge.svg)](https://github.com/ycmds/release-test-monorepo/actions/workflows/release.yml)
[![TypeScript + ESM](https://img.shields.io/badge/TypeScript-Ready-brightgreen.svg)](https://www.typescriptlang.org/)
[![License](https://badgen.net/github/license/ycmds/release-test-monorepo)](https://github.com/ycmds/release-test-monorepo/blob/main/LICENSE)
[![Ask me in Telegram](https://img.shields.io/badge/Ask%20me%20in-Telegram-brightblue.svg)](https://t.me/isuvorov)

<div align="center">
  <p><strong>❤️‍🔥 The BEST modern 2026 example of release tools for nano libraries</strong></p>
</div>

**🚀 Modern**: Built with ESM modules and TypeScript  
**🪶 Lightweight**: Tree-shakable functions for optimal bundle size  
**💪 Type-safe**: Full TypeScript support with comprehensive type definitions  
**⚡ Fast**: Optimized algorithms for maximum performance  
**🎯 Focused**: Essential utilities without bloat  
**📦 Zero Dependencies**: No external dependencies  

## 📦 Packages

| Package | Version | Size | Bundle Size | Description |
|---------|---------|------|-------------|-------------|
| **[@macrobe/plus]** | [![npm](https://badgen.net/npm/v/@macrobe/plus)](https://www.npmjs.com/package/@macrobe/plus) | [![install size](https://packagephobia.com/badge?p=@macrobe/plus)](https://packagephobia.com/result?p=@macrobe/plus) | [![bundle](https://img.shields.io/bundlephobia/minzip/@macrobe/plus.svg)](https://bundlephobia.com/result?p=@macrobe/plus) | Plus utility functions |
| **[@macrobe/multiply]** | [![npm](https://badgen.net/npm/v/@macrobe/multiply)](https://www.npmjs.com/package/@macrobe/multiply) | [![install size](https://packagephobia.com/badge?p=@macrobe/multiply)](https://packagephobia.com/result?p=@macrobe/multiply) | [![bundle](https://img.shields.io/bundlephobia/minzip/@macrobe/multiply.svg)](https://bundlephobia.com/result?p=@macrobe/multiply) | Multiply utility functions |

[@macrobe/plus]: ./libs/plus
[@macrobe/multiply]: ./libs2/multiply

## 🚀 Usage

### @macrobe/plus

```ts
import { plus } from '@macrobe/plus';

const result = plus(2, 3);
// => 5
```

### @macrobe/multiply

```ts
import { multiply } from '@macrobe/multiply';

const result = multiply(2, 3);
// => 6
```

## 📖 Documentation

- [**@macrobe/plus**](./libs/plus/README.md) - Plus utility functions
- [**@macrobe/multiply**](./libs2/multiply/README.md) - Multiply utility functions

## 🛠 Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch
```

## 📝 License

MIT © [Igor Suvorov](https://github.com/isuvorov)

---

**@macrobe** - _Swimming in utilities_ 🐠
