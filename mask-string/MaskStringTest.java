import org.junit.Test;

public class MaskStringTest {
    String text = "234323432343234322234323423423421345434543";

    @Test
    public void return_masked_string() throws Exception {
        System.out.println("value of masked string >>>>>> " + maskString(text, 6, text.length() - 4, '*')); // value of masked string >>>>>> 234323********************************4543
    }

    private String maskString(String text, int start, int end, char maskChar) throws Exception {
        if (text == null || text.isEmpty()) return "";
        if (start < 0) start = 0;
        if (end > text.length()) end = text.length();
        if (start > end) throw new Exception("End index cannot be greater than start index");

        int maskLength = end - start;

        if (maskLength == 0) return text;

        StringBuilder sbMaskString = new StringBuilder(maskLength);

        for (int i = 0; i < maskLength; i++) {
            sbMaskString.append(maskChar);
        }

        return text.substring(0, start) + sbMaskString + text.substring(start + maskLength);
    }
}
