using System;
using System.Text;

namespace stringcompression
{
    ///String Compression: Implement a method to perform basic string compression using the counts of repeated characters.
    /// For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).
    class Program
    {
        static void Main(string[] args)
        {
            Run("aabcccccaaa");
            Run("aabc");
        }

        public static void Run(string str)
        {
            var responseString = Compress(str);
            System.Console.WriteLine("{0} : {1}", str, responseString);
        }
        public static string Compress(string str)
        {
            StringBuilder compressed = new StringBuilder();
            int consecutiveCount = 0;
            for (int i = 0; i < str.Length; i++)
            {
                consecutiveCount++;

                if (i + 1 >= str.Length || str[i] != str[i + 1])
                {
                    compressed.Append(str[i]);
                    compressed.Append(consecutiveCount);
                    consecutiveCount = 0;
                }
            }
            return compressed.Length < str.Length ? compressed.ToString() : str;
        }
    }
}