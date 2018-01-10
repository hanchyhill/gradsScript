'sdfopen F:\reanalysis\CMAP\precip.mon.mean.nc'
init=1
years=2013-1979+1-2
'set lon 110'
'set lat 17.5'
k=1
while k<=years
    d1=(k-1)*12+1
    d2=k*12
    if(d2=396)
        d2=395
    endif
    'set t 'd1 ' 'd2
    say d1
    say d2
'grads2ascii precip F:\reanalysis\pre_110E_17.5N.txt a %g 12 1'
    k=k+1
endwhile
;
