'open E:\paper\MJO\eof.out.ctl'
'set t 274'
'set gxout shaded'
'enable print E:\paper\MJO\eof.out.test.gmf'
'set lon 60 160'
'set z 1'
'd eof'
'print'
'c'
'set z 2'
'd eof'
'print'
'c'
'set z 1'
'd eof(z=1)+eof(z=2)'
'print'
'c'
'd eof(z=1)-eof(z=2)'
'print'
'c'
'disable print'
;