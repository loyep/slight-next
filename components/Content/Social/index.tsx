import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

enum SocialType {
  'qq', 'wechat', 'weibo', 'twitter', 'linkedin', 'facebook',
}

interface SltSocialProps {
  socials: SocialType[]
}

const defaultProps: SltSocialProps = {
  socials: []
}

const SltSocial: NextPage<SltSocialProps> = (props: Partial<SltSocialProps>) => {
  const { socials = [] } = { ...defaultProps, ...props };
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    setUrl(encodeURIComponent(document.location.href))
    setTitle(encodeURIComponent(document.title))
    return () => {
      //
    }
  }, [])

  const getShareUrl = (social: string) => {
    switch (social) {
      case 'qq':
        return `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}`
      case 'weibo':
        return `https://service.weibo.com/share/share.php?type=button&language=zh_cn&title=${title}&searchPic=true&url=${url}`
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}`
      case 'facebook':
        return `https://www.facebook.com/sharer.php?u=${url}`
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${title}`
    }
    return null
  }

  const renderSocialBtn = (social: string) => {
    const url = getShareUrl(social)
    if (!url) {
      return null
    }
    return (
      <a
        href={url}
        target="_blank"
        className={social}
        rel="nofollow noreferrer"
      >
        <span>
          <i className={`iconfont icon-${social}`}></i>
        </span>
      </a>
    )
  }

  return (
    <div className={styles.social}>
      {url && socials.map((social) => renderSocialBtn(social))}
    </div>
  )
}

export default SltSocial
