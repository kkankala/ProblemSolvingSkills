using System;
using helperlibrary;
namespace rotatematrix {
    class Program {
        static void Main (string[] args) {
            Console.Clear ();
            const int sizeN = 3;
            var matrix = MatrixHelper.RandomMatrix (sizeN, sizeN, 0, 9);
            MatrixHelper.PrintMatrix (matrix);
            if (Rotate (matrix, sizeN)) {
                System.Console.WriteLine ("Rotated Matrix is : ");
                MatrixHelper.PrintMatrix (matrix);
            } else {
                System.Console.WriteLine ("Not rotated");
            }
        }

        public static bool Rotate (int[][] matrix, int sizeN) {
            if (matrix.Length == 0 || matrix.Length != matrix[0].Length) return false;

            // int n = matrix.Length;
            for (int layer = 0; layer < sizeN / 2; layer++) {
                int first = layer;
                int last = sizeN - 1 - layer;
                Console.WriteLine ("layer:{0}, first:{1}, last:{2}", layer, first, last);
                for (int i = first; i < last; i++) {
                    int offset = i - first;
                    int top = matrix[first][i];
                    Console.WriteLine ("offset is {0}", offset);
                    //left -> top
                    matrix[first][i] = matrix[last - offset][first];
                    //bottom -> left
                    matrix[last - offset][first] = matrix[last][last - offset];
                    //right -> bottom
                    matrix[last][last - offset] = matrix[i][last];
                    // top -> right
                    matrix[i][last] = top;
                }
            }
            return true;
        }

    }
}