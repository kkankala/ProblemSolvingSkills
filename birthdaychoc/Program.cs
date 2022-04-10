using System;
using System.Collections.Generic;

namespace birthdaychoc {
    class Program {
        static void Main (string[] args) {
            //PROBLEM: https://www.hackerrank.com/challenges/the-birthday-bar/problem

            //Examples:
            var s = new List<int> () { 1, 2, 1, 3, 2 };
            var response = birthday (s, 3, 2); //-- output 2;

            // var s = new List<int> () { 4 };
            // var response = birthday (s, 4, 1); //-- output 1;

            // var s = new List<int> () { 1, 1, 1, 1, 1, 1 }; //-- output 0
            // var response = birthday (s, 3, 2);

            Console.WriteLine (response);
        }

        static int birthday (List<int> s, int d, int m) {
            int n = s.Count;
            int squaresOfChoc = m;
            int validTimes = 0;

            for (var i = 0; i < n; i++) {
                var currentSum = 0;
                var notFound = true;

                for (var j = 0; j < m; j++) {
                    if (i + j >= n) {
                        break;
                    }
                    currentSum = currentSum + s[i + j];
                    if (currentSum > d) {
                        notFound = false;
                        break;
                    }
                }
                if (notFound && currentSum == d) {
                    validTimes++;
                }
            }
            Console.WriteLine ("Valid times ", validTimes);
            return validTimes;
        }
    }
}