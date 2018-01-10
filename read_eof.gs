'reinit'
'open F:\reanalysis\output\EOF_July_Nov_30-90\olr_flat_EOF(30t_90t)July_Nov.ctl'
'set gxout shaded'
'enable print F:\reanalysis\output\EOF_July_Nov_30-90\olr_flat_EOF(30t_90t)July_Nov.gmf'
days=30
init=1
k=0
*À¶É«
'set rgb 24 167 250 200'
'set rgb 25 18 215 239'
'set rgb 26 24 160 224'
'set rgb 27 10 134 229'
'set rgb 28 3 121 242'
'set rgb 29 62 44 236'
'set rgb 30 86 31 226'
'set rgb 31 59 25 187'
'set rgb 32 62 3 128'
*ºìÉ«
'set rgb 33 252 75 45'
'set rgb 34 253 118 52'
'set rgb 35 252 154 38'
'set rgb 36 248 205 89'
'set rgb 37 250 235 110'
'set rgb 38 238 251 132'
'set rgb 39 197 248 136'

while(k<days)
'set t 'init+k 
'd olr'    
'run cbar'
'draw title OLR difference EOF(30t~90t).  PC'k+1
'print'
'c'
k=k+1 
endwhile
'disable print'
;
