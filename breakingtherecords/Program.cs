using System;

namespace breakingtherecords {
    class Program {
        static void Main (string[] args) {
            //PROBLEM: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

            var response = breakingRecords (new int[] { 10, 5, 20, 20, 4, 5, 2, 25, 1 });
        }

        static int[] breakingRecords (int[] a) {
            int n = a.Length;
            int maxScore = a[0];
            int minScore = a[0];
            int maxScoreCount = 0;
            int minScoreCount = 0;
            for (var i = 0; i < n; i++) {
                if (a[i] > maxScore) {
                    maxScore = a[i];
                    maxScoreCount++;
                }
                Console.WriteLine (a[i]);
                if (a[i] < minScore) {
                    minScore = a[i];
                    minScoreCount++;
                }
            }
            Console.WriteLine ($"Max Score { maxScoreCount }, Min Score {minScoreCount}");
            return new int[] { maxScoreCount, minScoreCount };
        }
    }
}