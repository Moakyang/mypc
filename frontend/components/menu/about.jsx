import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontSize: '24px'
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    letterSpacing: theme.spacing(0.5)
  }
}))

function About() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <div>
           목양장로교회 소개

목양장로교회는 현재 위임 목사이신 송병기 목사님과 12명의 교우들이 1983년 3월6일 51-11Queens Blvd. Woodside,NY 11377 에서 모여 창립 예배를 드림으로 시작되었습니다.

또한 목양 장로 교회는 한국의 얼과 아름다운 믿음의 자취를 남기는 교회를 만들어 왔습니다. 해외 한인 장로회 교단(KPCA) 소속으로 세계와 함께 믿음의 길을 가고 있습니다.

선교지로는 각 가정교회를 중심으로 수십지역의 선교지와 조국의 농어촌 교회, 뉴욕 청소년 센타와 문서 선교로 복음신문 등 교계 언론사들을 돕고 있습니다.

목양 장로 교회는 "성령의 역사가 풍성한 교회" "선교의 사역이 넘치는 교회" "주님의 영광이 가득한 교회" 라는 공동체 목표아래 오늘도 힘차게 전진하고 있습니다.



목양장로교회는 성경적인 가정교회를 추구하는 교회입니다. 가정교회는 전통이나 제도, 사람에 의해 움직이는 교회가 아닌 평신도 사역자를 세워 성령의 강력한 지배를 받는 역동적인 교회입니다.

목양장로교회는 2020년까지 153인의 평신도 지도자를 세워 세계를 복음화 하는 비전을 품고 달려 나아가고 있습니다.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          tempora repellendus cum ex quos vel placeat, odio quibusdam earum quo,
          magni est cumque modi debitis magnam nam vero aliquid officiis.
        </div>
      </div>
    </div>
  )
}

export default About
