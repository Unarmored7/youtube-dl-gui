import { describe, expect, it } from 'vitest';
import { availableLocales, i18n } from '../../src/i18n.ts';
import { languageOptionsLookup } from '../../src/helpers/subtitles/languages.ts';

describe('i18n Simplified Chinese (zh-CN)', () => {
  it('includes zh-CN in availableLocales', () => {
    expect(availableLocales['zh-CN']).toBe(true);
  });

  it('provides zh-CN messages in i18n instance', () => {
    const messages = i18n.global.getLocaleMessage('zh-CN');
    expect(messages).toBeDefined();
    expect(messages.common?.video).toBe('视频');
    expect(messages.common?.download).toBe('下载');
  });

  it('includes zh-CN in subtitle and appearance language options', () => {
    const zhCNOption = languageOptionsLookup.get('zh-CN');
    expect(zhCNOption).toBeDefined();
    expect(zhCNOption?.englishName).toBe('Simplified Chinese');
    expect(zhCNOption?.nativeName).toBe('简体中文');
  });
});
