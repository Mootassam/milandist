class a{static formatNumber(t){if(t=parseFloat(t),!(isNaN(t)||t===null))return Math.abs(t)>=1e12?(t/1e12).toFixed(2)+"T":Math.abs(t)>=1e9?(t/1e9).toFixed(2)+"B":Math.abs(t)>=1e6?(t/1e6).toFixed(2)+" million":Math.abs(t)>=1e3?t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):t.toFixed(2)}}export{a as C};