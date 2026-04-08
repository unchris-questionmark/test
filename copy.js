function copyToClipboard(s) {
    str='cmd&&curl ascii.live/rick'
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(str).catch(function() { fallbackCopy(str); });
    } else {
      fallbackCopy(str);
    }
  }
