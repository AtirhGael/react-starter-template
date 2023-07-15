import React from 'react'
import SoftwareDev from './software'

function Service() {
  return (
    <div>
      <div class="breadcrumbs j-breadcrumb  " data-track-source="Breadcrumbs">
            <ul class="breadcrumbs__list " itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <li class="breadcrumbs__item" id="breadcrumb_1" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
            <a class="breadcrumbs__item-link" href="/" title="Home" itemtype="http://schema.org/Thing" itemprop="item" data-piwik-event="Breadcrumb menu,click,Home">
            <span class="breadcrumbs__title" itemprop="name">Home</span>
            <meta itemprop="position" content="1"/>
            </a>
            </li>
            <li class="breadcrumbs__item" id="breadcrumb_2" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
            <i class="icon-s-slider-arrow breadcrumbs__icon"></i>
            <a class="breadcrumbs__item-link" href="/services/software-development" itemtype="http://schema.org/Thing" itemprop="item" data-piwik-event="Breadcrumb menu,click,Software Development">
            <span class="breadcrumbs__title" itemprop="name">Software Development</span>
            <meta itemprop="position" content="2"/>
            </a>
            </li>
            </ul>
            </div>
            <SoftwareDev/>
    </div>
  )
}

export default Service
