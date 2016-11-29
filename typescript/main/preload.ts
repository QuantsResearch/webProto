// IE9 doesn't implement console
class DummyConsole {
    assert(){}
    clear(){}
    count(){}
    debug(){}
    dir(){}
    dirxml(){}
    error(){}
    group(){}
    groupCollapsed(){}
    groupEnd(){}
    info(){}
    log(){}
    msIsIndependentlyComposed(){}
    profile(){}
    profileEnd(){}
    select(){}
    time(){}
    timeEnd(){}
    trace(){}
    warn(){}
}
const w:any = window; // cheat type check.
w.console || (w.console = new DummyConsole());