# テスト実行

## pytest

```
$ pytest test_calcuration.py --os-name=mac -s
```

## pytest-cov

```
$ pytest test_calcuration.py --cov=calcuration --cov-report term-missing
```

## Tox
- 仮想環境でテストを行う
```
$ tox
```