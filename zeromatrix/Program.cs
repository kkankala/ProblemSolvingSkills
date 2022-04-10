using System;
using helperlibrary;

namespace zeromatrix {
    class Program {
        static void Main (string[] args) {
            int sizeM = 3;
            int sizeN = 2;
            var matrix = MatrixHelper.RandomMatrix (sizeM, sizeN);
            MatrixHelper.PrintMatrix (matrix);
            SetZeros (matrix);
            System.Console.WriteLine ("Resolved Matrix: ");
            MatrixHelper.PrintMatrix (matrix);
        }

        public static void SetZeros (int[][] matrix) {
            bool[] rows = new bool[matrix.Length];
            bool[] columns = new bool[matrix[0].Length];

            for (int i = 0; i < matrix.Length; i++) {
                for (int j = 0; j < matrix[0].Length; j++) {
                    if (matrix[i][j] == 0) {
                        rows[i] = true;
                        columns[j] = true;
                    }
                }
            }

            for (int i = 0; i < rows.Length; i++) {
                if (rows[i]) NullifyRows (matrix, i);
            }
            for (int j = 0; j < columns.Length; j++) {
                if (columns[j]) NullifyColumns (matrix, j);
            }
        }

        public static void NullifyRows (int[][] matrix, int row) {
            for (int j = 0; j < matrix[0].Length; j++) {
                matrix[row][j] = 0;
            }
        }

        public static void NullifyColumns (int[][] matrix, int column) {
            for (int i = 0; i < matrix.Length; i++) {
                matrix[i][column] = 0;
            }
        }
    }
}