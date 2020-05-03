using System;
using System.IO;
namespace kangaroojumps {
    class Program {
        static void Main (string[] args) {

            // PROBLME: https://www.hackerrank.com/challenges/kangaroo/problem
            //TextWriter textWriter = new StreamWriter (@System.Environment.GetEnvironmentVariable ("OUTPUT_PATH"), true);

            //string[] x1V1X2V2 = Console.ReadLine ().Split (' ');

            int x1 = 0; //Convert.ToInt32 (x1V1X2V2[0]);

            int v1 = 2; //Convert.ToInt32 (x1V1X2V2[1]);

            int x2 = 5; //Convert.ToInt32 (x1V1X2V2[2]);

            int v2 = 3; //Convert.ToInt32 (x1V1X2V2[3]);

            string result = kangaroo (x1, v1, x2, v2);
            Console.WriteLine (result);
            //textWriter.WriteLine (result);

            //textWriter.Flush ();
            //textWriter.Close ();
        }

        static string kangaroo (int x1, int v1, int x2, int v2) {

            int y1 = x1 + v1;
            int y2 = x2 + v2;
            if (y1 == y2) {
                return "YES";
            }
            for (var i = 2; i <= 10000; i++) {
                y1 = y1 + v1;
                y2 = y2 + v2;
                if (y1 == y2) {
                    return "YES";
                }
            }
            return "NO";
        }

    }
}