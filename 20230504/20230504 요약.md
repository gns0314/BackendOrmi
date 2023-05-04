## !! 오늘 배운 것 정리

1. sort
    * sorted는 원본을 만지지 않는 'built-in function', 정렬입니다.
    * sort는 원본을 만지는 '리스트 메서드', 정렬입니다.
    * sort의 다양한 예
        ```python
        l = [[1, 10, 'leehojun'], 
            [20, 30, 'hojun'], 
            [10, 20, 'weniv!'], 
            [1, 2, 'hello world'], 
            [55, 11, 'sun']]

        # 1. 글자 수 대로 정렬해주세요.
        def f(x):
            return len(x[2])

        print(sorted(l, key=f, reverse=False))
        print(sorted(l, key=lambda x:len(x[2]), reverse=False))

        # 2. 맨 앞에 위치한 숫자대로 정렬해주세요.
        def f2(x):
            return x[0]

        print(sorted(l))
        print(sorted(l, key=f2))
        print(sorted(l, key=lambda x:x[0]))

        # 3. 중앙에 위치한 값대로 정렬해주세요.

        def f3(x):
            return x[1]

        print(sorted(l))
        print(sorted(l, key=f3))
        print(sorted(l, key=lambda x:x[1]))

        l = [[1, 10, 32], 
            [20, 30, 11], 
            [10, 20, 22], 
            [1, 2, 13], 
            [55, 11, 44]]
            
        # 4. 3개의 전체 합이 작은 순서대로 출력해주세요.

        def f4(x):
            return x[0] + x[1] + x[2]

        def f5(x):
            return sum(x)

        print(sorted(l, key=f4))
        print(sorted(l, key=f5))
        print(sorted(l, key=lambda x: sum(x)))
        print(sorted(l, key=sum))
        ```

2. 깊은 복사와 얕은 복사
    1. 깊은 복사 : 완전히 다른 객체를 만듭니다.(깊은 복사는 n 계층까지 모두 복사)
        ```python
        # 깊은 복사
        import copy

        l = [[1, 2, 3], [4, 5, 6]]
        ll = copy.deepcopy(l)
        ll[0][0] = 10
        l, ll
        ```
    2. 얕은 복사 : 내용물은 같은 다른 객체를 만듭니다.(얕은 복사는 1 계층만 복사)
        ```python
        # 얕은 복사
        l = [[1, 2, 3], [4, 5, 6]]
        ll = l[:] # l.copy, sorted를 써도 마찬가지입니다.
        l[0][0] = 100
        l, ll
        ```

3. range
    ```python
    # range(start, stop, step) 
    # 슬라이싱은 ':'(콜론)으로 연결되어 있고
    # range는 ','(콤마)로 연결되어 있습니다.

    print(list(range(100))) 
    # python 2.x에서 python 3.x에 range를 사용하고 싶다면 xrange(10)
    print(list(range(5, 10)))

    print(list(range(0, 101, 2))) #짝수
    print(list(range(1, 101, 2))) #홀수
    print(list(range(100, 1, -2)))
    print(sum(list(range(0, 101))))
    print(sum(range(0, 101))) # 이렇게 형 변환을 하지 않고 sum하시는 것을 권합니다.
    ```

4. list comprehension
    ```python
    # l = []
    # for i in range(1, 11):
    #     l.append(i**i)
    # l

    l = [i**i for i in range(1, 11)]
    l
    ```

5. tuple
    - 튜플은 순서가 있는 시퀀스형 자료형입니다.
    - 참조값은 변경이 불가능(immutable) 합니다.
        ```python
        t = (10, 20, 30)
        t[1] = 1000 # error
        ```
    - 다른 자료형을 입력할 수 있으며, 튜플 안에 튜플로 다차원의 튜플을 만드는 것도 가능합니다.
    - 값의 중복을 허락합니다.
    - 메서드는 index와 count밖에 없습니다.

6. dict (딕셔너리, 사전형)
    - 딕셔너리는 순서가 없는 자료형입니다.
    - 사전형은 Key와 Value 가 하나의 묶음으로 이루어진 자료 체계입니다.
    - 값의 변경이 가능합니다.
        ```python
        d = {'one' : '하나', 'two' : '둘', 'three' : '셋'}
        print(d['one']) # 호출
        d['two'] = '투' # 변경
        d
        ```
    - 다른 자료형을 입력할 수 있습니다.
    - 키의 중복은 허락하지 않고, 값의 중복을 허락합니다.
    - dict를 활용한 switch 만들기
        ```python
        def switch(day):
            return {
                1 : '월요일',
                2 : '화요일',
                3 : '수요일',
                4 : '목요일',
                5 : '금요일',
                6 : '토요일',
                7 : '일요일',
            }.get(day, '요일을 찾지 못했습니다.')

        switch(8) 
        ```
    - max를 이용한 dict 최대 value의 key값 가져오기
        ```python
        d = {
            'test1': 10,
            'test2': 20,
            'test3': 31,
            'test4': 11,
        }

        # max(d.values()) # 이걸로는 뭔가 찾아내기 힘듭니다.
        max(d, key=lambda x: d[x])
        max(d, key=d.get) #많이 사용하는 코드입니다.
        ```

7. 언패킹
    * 언패킹 예
        ```python
        for i, j, k in [[10, 20, [1, 2]], [30, 40, [3, 4]], [50, 60, [5, 6]]]:
            print(i, j, k)
        ```
    * swap 예
        ```python
        # swap
        a = 10
        b = 15
        a, b = b, a
        a, b
        ```

8. set (셋, 집합)
    * 집합 자료형은 중복을 허용하지 않으며
    * 순서가 없는 자료형
        ```python
        n = set([1, 1, 2, 2, 3, 3, 4])
        print(n)
        ```
    * 메서드
        - add : 값 추가
        - update : 값 여러개 추가
        - remove : 제거
        - copy : 값 복사
        - union : 합집합
        - intersection : 교집합
        - difference : 차집합
        - issubset : 부분집합