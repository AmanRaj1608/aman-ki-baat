---
title: Competitive Programming C++ Cheat Sheet
abstract: After reading many codeforces blogs this is what I had learned and used as as my template for Competitive Programming.
date: 1587388500000
---

### Unlock speed

```cpp
#define fast_io  ios_base::sync_with_stdio(false);cin.tie(NULL);
```

### Increase map speed

```cpp
mp.reserve(n)
```

### Cheat with boost library on codechef

```cpp
#include <boost/multiprecision/cpp_int.hpp>
using boost::multiprecision::cpp_int;
```

### For Leetcode

```cpp
static int fast_io = []() {
    ios::sync_with_stdio(false); cin.tie(NULL); cout.tie(0);
    return 0;
}();
```

There are also things like use `append_back` instead of push_back but I dont think that makes much difference.
I recommend reading these blogs

- [https://codeforces.com/blog/entry/23054](https://codeforces.com/blog/entry/23054)
- [https://codeforces.com/blog/entry/74684](https://codeforces.com/blog/entry/74684)
- [append-vs-push-back](https://stackoverflow.com/questions/15082170/c-stdstring-append-vs-push-back)

### My template

```cpp
//      (╯°□°)╯︵ ┻━┻
#include<bits/stdc++.h>
// #include <boost/multiprecision/cpp_int.hpp>
// using boost::multiprecision::cpp_int;
using namespace std;
#define ll                 long long int
#define lld                long double
#define vi                 vector<ll>
#define pb                 push_back
#define MOD                (ll)(1e9 + 7)
#define rep(i,a,b)         for(ll i = a; i<b; ++i)
#define f(a)               for(ll i = 0; i<a; ++i)
#define all(a)             (a).begin(),(a).end()
#define present(c,x)       ((c).find(x) != (c).end())
#define cpresent(c,x)      (find(all(c),x) != (c).end())
#define p(a)               cout << a << endl;
#define p2(a,b)            cout << a << " " << b << endl;
#define fast_io            ios_base::sync_with_stdio(false);cin.tie(NULL);
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
// GCD + LCM function
ll gcd(ll a, ll b) { return b == 0 ? a : gcd(b, a % b); }
ll lcm(ll a, ll b) { return a * (b / gcd(a, b)); }

int32_t main() {
    fast_io; cout.tie(NULL);
    ll tc = 1;
    cin >> tc;
    while(tc--) {
        //
    }
}
```

![](https://i.imgflip.com/5ahh23.jpg)

Thanks for reading. See you next time 😝
