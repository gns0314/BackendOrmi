## A

- abs(): 절대값을 반환하는 함수

  ```
  abs(-5) --> 5
  ```

- all(): 반복 가능한 자료형의 모든 요소가 참인지 판별하는 함수

```
all([True, 1, 'hello']) --> True
all([True, 0, 'hello']) --> False
```

- any(): 반복 가능한 자료형 중 하나라도 참이면 True를 반환하는 함수

```
any([True, 0, '']) --> True
any([False, 0, '']) --> False
```

## B

- bin(): 정수를 2진수로 변환하는 함수

```
bin(10) --> '0b1010'
```

- bool(): 객체의 불(bool)값을 반환하는 함수

```
bool('hello') --> True
bool('') --> False
```

## C

- chr(): 아스키 코드값을 입력받아 그 코드에 해당하는 문자를 반환하는 함수

```
chr(65) --> 'A'
```

## D

- dict(): 딕셔너리를 생성하는 함수

```
dict(a=1, b=2) --> {'a': 1, 'b': 2}
```

- dir(): 객체가 자체적으로 가지고 있는 변수나 함수를 보여준다.

```
dir(list) --> 리스트가 가지고 있는 변수와 메소드들을 보여줌
```

## E

- enumerate(): 순서가 있는 자료형을 입력받아 인덱스 값을 포함하는 enumerate 객체를 반환하는 함수

```
enumerate(['apple', 'banana', 'orange']) --> [(0, 'apple'), (1, 'banana'), (2, 'orange')]
```

- eval(): 실행 가능한 문자열(1+2, 'hi' + 'a' 같은 것들)을 입력받아 문자열을 실행한 결과값을 반환하는 함수

```
eval('1+2') --> 3
```

## F

- filter(): 함수와 반복 가능한(iterable) 자료형을 입력받아서, 함수가 반환하는 True 값만 필터링해주는 함수

```
list(filter(lambda x: x > 3, [1, 2, 3, 4, 5])) --> [4, 5]
```

- float(): 문자열 형태의 숫자나 정수를 입력받아서 부동 소수점(float) 형태로 반환하는 함수

```
float('3.14') --> 3.14
```

## G

- globals(): 현재 전역 심볼 테이블에 있는 심볼들을 나타내는 딕셔너리 객체를 반환

```
a = 10
def my_func():
    pass
print(globals())
```

- 결과

```
{
 '__name__': '__main__',
 '__doc__': None,
 '__package__': None,
 '__loader__': <class '_frozen_importlib.BuiltinImporter'>,
 '__spec__': None,
 '__annotations__': {},
 '__builtins__': <module 'builtins' (built-in)>,
 'a': 10,
 'my_func': <function my_func at 0x7f8e064c4280>
}
```

- a 변수와 my_func() 함수가 딕셔너리 형태로 출력되는 것을 확인할 수 있습니다. 따라서 globals() 함수는 현재 전역 네임스페이스에 정의된 모든 심볼을 확인할 때 유용하게 사용할 수 있음

## H

- help(): 함수에 대한 도움말을 출력하는 함수

```
help(print) --> print 함수에 대한 도움말을 출력
```

- hex(): 정수를 입력받아 16진수(hexadecimal)로 변환하는 함수

```
hex(255) --> '0xff'
```

## I

- input(): 사용자 입력을 받는 함수

```
name = input('이름을 입력하세요: ')
```

- int(): 문자열 형태의 숫자나 소수점이 있는 숫자 등을 정수 형태로 반환하는 함수

```
int('3') --> 3
int(3.14) --> 3
int('1010', 2) --> 10 (2진수 1010을 10진수로 변환)
```

- isinstance(): 인스턴스가 해당 클래스(또는 타입)인지 판별하는 함수

```
isinstance('hello', str) --> True
isinstance([1, 2, 3], list) --> True
```

- issubclass(): 클래스가 다른 클래스의 자식 클래스인지 판별하는 함수

```
issubclass(bool, int) --> True
```

- iter(): 반복 가능한(iterable) 자료형을 입력받아 이터레이터(iterator) 객체를 반환하는 함수

```
a = [1, 2, 3]
ia = iter(a)
next(ia)
1
next(ia)
2
next(ia)
3
next(ia)
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
StopIteration
```

- 더는 리턴할 값이 없다면 StopIteration 예외가 발생, for문을 이용하면 next() 함수를 따로 호출할 필요도 없고(for문이 자동으로 호출) StopIteration 예외에 신경 쓸 필요도 없다

## L

- len(): 입력값의 길이(요소의 전체 개수)를 반환하는 함수

```
len('hello') --> 5
len([1, 2, 3]) --> 3
```

- list(): 리스트를 생성하는 함수

```
list((1, 2, 3)) --> [1, 2, 3]
```

- locals(): 현재의 로컬 심볼 테이블을 나타내는 딕셔너리 객체를 반환하는 함수

```
def func():
    a = 1
    b = 2
    print(locals())
func() --> {'a': 1, 'b': 2}
```

## M

- map(): 함수와 반복 가능한(iterable) 자료형을 입력받아서, 각 요소마다 입력받은 함수를 적용한 결과를 묶어서 반환하는 함수

```
list(map(lambda x: x * 2, [1, 2, 3])) --> [2, 4, 6]
```

- max(): 반복 가능한(iterable) 자료형에서 최대값을 반환하는 함수

```
max([1, 2, 3]) --> 3
```

- min(): 반복 가능한(iterable) 자료형에서 최소값을 반환하는 함수

```
min([1, 2, 3]) --> 1
```

## N

- next(): 이터레이터(iterator) 객체의 다음 요소를 반환하는 함수

```
it = iter([1, 2, 3])
print(next(it)) --> 1
```

- 더는 리턴할 값이 없다면 StopIteration 예외가 발생

## O

- object() : 새로운 기능이 없는 객체를 반환합니다. object는 모든 클래스의 기본 클래스입니다. 이 객체는 Python 클래스의 모든 인스턴스에서 공통으로 사용하는 메서드를 가지고 있습니다. 이 함수는 인수를 받지 않습니다.
- oct(): 정수를 입력받아 8진수(octal) 문자열로 반환하는 함수

```
oct(10) --> '0o12'
```

- ord(): 문자의 아스키 코드 값을 반환하는 함수

```
ord('A') --> 65
```

- open(): 함수는 파일을 열 때 사용되며, 파일 객체를 반환합니다. 파일을 열 때 읽기/쓰기/이어쓰기 등 여러 모드를 설정할 수 있습니다

```
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
- file: 파일 경로 또는 파일 객체
- mode: 파일을 열 때의 모드(r: 읽기, w: 쓰기, a: 이어쓰기, x: 쓰기
전용으로 파일을 생성 등)
- buffering: 버퍼링에 사용되는 값(기본값: -1)
- encoding: 파일 인코딩
- errors: 인코딩 에러 처리 방법
- newline: 줄바꿈 처리 방법
- closefd: 파일 디스크립터(fd)를 자동으로 닫을 것인지 여부
- opener: 사용자 지정 파일 오프너
```

## P

- pow(): x의 y 제곱한 결과를 반환

```
pow(2, 3) # 2의 3제곱을 계산하여 반환합니다: 8
pow(2, 3, 5) # 2의 3제곱을 5로 나눈 나머지를 계산하여 반환합니다: 3
```

- print(): 지정된 객체를 표준 출력에 출력하는 함수입니다.

```
print("Hello, World!") # Hello, World! 출력
```

- property(): 프로퍼티 속성을 반환합니다

```
property(fget=None, fset=None, fdel=None, doc=None)
fget은 속성 값을 가져오는 함수이고, fset은 속성 값을 설정하는 함수입니다. fdel은 속성 값을 삭제하는 함수이며, doc은 해당 속성에 대한 도움말 문자열(docstring)을 생성합니다.
```

## R

- range(): 지정한 범위의 정수를 반복 가능한 객체로 만들어 반환하는 함수

````
list```(range(1, 6)) --> [1, 2, 3, 4, 5]
````

- repr(): 객체를 문자열 형태로 반환하는 함수

```
repr('hello') --> "'hello'"
```

- reversed(): 반복 가능한 객체를 받아서, 순서를 반대로 뒤집은 객체를 반환하는 함수

```
list(reversed([1, 2, 3])) --> [3, 2, 1]
```

- round(): 실수를 받아서 반올림한 값을 반환하는 함수

```
round(3.141592, 2) --> 3.14
```

## S

- set(): 집합(set)을 반환하는 함수

```
set([1, 2, 3]) --> {1, 2, 3}
```

- setattr(): 객체와 속성, 속성값을 받아서 객체의 속성을 설정하는 함수

```
class Person:
pass
person = Person()
setattr(person, 'name', 'Alice')
print(person.name) --> 'Alice'
```

- slice(): 시퀀스 자료형을 잘라내는 객체를 생성하는 함수

```
s = 'hello'
slicer = slice(1, 4)
s[slicer] --> 'ell'
```

- sorted(): 반복 가능한 객체를 정렬한 후 리스트로 반환하는 함수

```
sorted([3, 1, 2]) --> [1, 2, 3]
```

- staticmethod(): 정적 메서드를 생성하는 함수

```
class MyClass:
@staticmethod
def my_method(x):
return x * 2
MyClass.my_method(3) --> 6
```

- str(): 문자열로 변환하는 함수

```
str(3.14) --> '3.14'
```

- sum(): 반복 가능한 객체의 항목들의 합을 반환하는 함수

```
sum([1, 2, 3]) --> 6
```

- super(): 자식 클래스에서 부모 클래스의 내용을 사용하고 싶을 때 사용하는 함수

```
예시: class Parent:
def my_method(self):
print('Parent method')
class Child(Parent):
def my_method(self):
super().my_method()
print('Child method')
child = Child()
child.my_method() --> 'Parent method'와 'Child method' 출력
```

## T

- tuple(): 튜플을 생성하는 함수

```
tuple([1, 2, 3]) --> (1, 2, 3)
```

- type(): 객체의 자료형을 반환하는 함수

```
type('hello') --> <class 'str'>
```

## V

- vars(): 객체의 dict 속성을 반환하는 함수

```
class MyClass:
def init(self):
self.x = 1
self.y = 2
obj = MyClass()
vars(obj) --> {'x': 1, 'y': 2}
```

## Z

- zip(): 동일한 개수로 이루어진 자료형을 묶어주는 함수

```
list(zip([1, 2, 3], [4, 5, 6])) --> [(1, 4), (2, 5), (3, 6)]
```
