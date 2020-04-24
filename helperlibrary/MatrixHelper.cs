using System;

namespace helperlibrary {
    public static class MatrixHelper {

        public static int[][] RandomMatrix (int m, int n, int min = 0, int max = 9) {
            int[][] matrix = new int[m][];
            for (int i = 0; i < m; i++) {
                matrix[i] = new int[n];
                for (int j = 0; j < n; j++) {
                    matrix[i][j] = RandomIntInRange (min, max);
                }
            }
            return matrix;
        }
        public static int RandomIntInRange (int min, int max) {
            return RandomInt (max + 1 - min) + min;
        }

        private static readonly Random RandomIntNumbers = new Random ();

        public static int RandomInt (int n) {
            return RandomIntNumbers.Next (n);
        }

        public static void PrintMatrix (int[][] matrix) {
            for (int i = 0; i < matrix.Length; i++) {
                for (int j = 0; j < matrix[i].Length; j++) {
                    if (matrix[i][j] < 10 && matrix[i][j] > -10) {
                        Console.Write (" ");
                    }
                    if (matrix[i][j] < 100 && matrix[i][j] > -100) {
                        Console.Write (" ");
                    }
                    if (matrix[i][j] >= 0) {
                        Console.Write (" ");
                    }
                    Console.Write (" " + matrix[i][j]);
                }
                Console.WriteLine ();
            }
        }
    }
}