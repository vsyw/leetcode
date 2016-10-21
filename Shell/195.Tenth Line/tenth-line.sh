# Solution 1
# 記錄號 (NR) 是另一個方便的變量。它始終包含當前記錄的編號
#（awk 將第一個記錄算作記錄號 1）。迄今為止，我們已經處理了每一行包含一個記錄的輸入文件。
awk 'NR == 10' file.txt

# Solution 2
# sed 教學：
# http://wanggen.myweb.hinet.net/ach3/ach3.html
sed -n 10p file.txt

# Solution 3
tail -n 10 file.txt
