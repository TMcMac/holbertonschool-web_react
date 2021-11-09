const {  getFooterCopy, getFullYear, getLatestNotification } = require('./utils')

test('check getFooterCopy boolean return string value', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test('check getFullYear return value is current year', () => {
    expect(getFullYear().toString()).toBe(new Date.getFullYear().toString());
})

test('check getLatestNotification return value', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})
