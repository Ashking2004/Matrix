#include <bits/stdc++.h>
using namespace std;
int main()
{    int a,b,cities,routes;
cin>>cities;
routes=cities-1;
int timearray[routes];
for (size_t i = 0; i < routes; i++)//Clculation of bitwise XOR operation of routes
{
    cin>> a ;
    cin>> b ;
    if(a<b)
      {
        timearray[i]=a^b;
      }
    else
}
int res = 0;
    for (int  i = 0; i < routes; i++)//Calculate of bitwise XOR operation of F(i,j)
    {
        res ^= timearray[i];
    }
    cout << res;
    return 0;
}
