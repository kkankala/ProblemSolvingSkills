using System;

namespace oneeditaway {
    class Program {
        static void Main (string[] args) {
            Run ("pale", "ple");
            Run ("pales", "pale");
            Run ("pale", "bale");
            Run ("pale", "bae");

            Console.WriteLine ("Hello World!");
        }

        public static bool OneEditReplace (string s1, string s2) {
            bool foundDifference = false;
            for (int i = 0; i < s1.Length; i++) {
                if (s1[i] != s2[i]) {
                    if (foundDifference) {
                        return false;
                    }
                    foundDifference = true;
                }
            }
            return true;
        }
        public static bool OneEditInsert (string s1, string s2) {

            int index1 = 0;
            int index2 = 0;
            while (index2 < s2.Length && index1 < s1.Length) {
                if (s1[index1] != s2[index2]) {
                    if (index1 != index2) {
                        return false;
                    }
                    index2++;
                } else {
                    index1++;
                    index2++;
                }
            }
            return true;
        }
        public static bool OneEditAwayProcess (string first, string second) {
            if (first.Length == second.Length) {
                return OneEditReplace (first, second);
            } else if (first.Length + 1 == second.Length) {
                return OneEditInsert (first, second);
            } else if (first.Length - 1 == second.Length) {
                return OneEditInsert (second, first);
            }
            return false;
        }
        public static void Run (string a, string b) {
            // string a = "pse";
            // string b = "pale";

            bool isOneEdit = OneEditAwayProcess (a, b);
            System.Console.WriteLine ("{0}, {1}: {2}", a, b, isOneEdit);
        }
    }
}