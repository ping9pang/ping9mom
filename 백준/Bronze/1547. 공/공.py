M = int(input())
temp = 1

for i in range(M):
    a, b = map(int,input().split())
    if temp == a:
        temp = b
    elif temp == b:
        temp = a
print(temp)