using System;

namespace birthdaycandles {
    class Program {
        static void Main (string[] args) {

            // PROBLEM: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

            // Examples
            // int[] ar = Array.ConvertAll (Console.ReadLine ().Split (' '), arTemp => Convert.ToInt32 (arTemp));
            // int arCount = 10;
            int[] ar = new int[] { 44, 53, 31, 27, 77, 60, 66, 77, 26, 36 };
            int result = birthdayCakeCandles (ar);
            Console.WriteLine (result);
        }

        static int birthdayCakeCandles (int[] ar) {
            int n = ar.Length;
            int maxHeight = 0;
            int maxHeightCandles = 0;

            for (int i = 0; i < n; i++) {
                if (ar[i] > maxHeight) {
                    maxHeight = ar[i];
                    maxHeightCandles = 1;
                } else if (ar[i] == maxHeight) {
                    maxHeightCandles++;
                }
            }

            return maxHeightCandles;
        }
    }
}

//https://www.w3resource.com/csharp-exercises/array/csharp-array-exercise-8.php