using System;

namespace divisiblesumpairs {
    class Program {
        static void Main (string[] args) {
            Console.WriteLine ("Hello World!");
            var n = 6;
            var k = 3;
            var ar = new int[] { 1, 3, 2, 6, 1, 2 };
            Console.WriteLine (divisibleSumPairs (n, k, ar));
        }

        static int divisibleSumPairs (int n, int k, int[] ar) {
            var currentTimes = 0;
            for (int i = 0; i < n - 1; i++) {
                //Console.WriteLine ("Array element {0} --->", ar[i]);
                for (int j = i + 1; j < n; j++) {
                    //Console.WriteLine ("\t\tArray element {0}", ar[j]);
                    if ((ar[i] + ar[j]) % k == 0) {
                        // Console.WriteLine ($"({ar[i]},{ar[j]})");
                        Console.WriteLine ($"({i},{j})");
                        currentTimes++;
                    }
                }
            }
            return currentTimes;

        }
    }
}