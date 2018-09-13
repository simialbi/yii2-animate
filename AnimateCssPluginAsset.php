<?php
/**
 * @package yii2-animate.css
 * @author Simon Karlen <simi.albi@gmail.com>
 */

namespace simialbi\yii2\animatecss;


use simialbi\yii2\web\AssetBundle;

/**
 * Asset bundle to user animation.css as data attributes
 * @package simialbi\yii2\animatecss
 */
class AnimateCssPluginAsset extends AssetBundle {
	/**
	 * {@inheritdoc}
	 */
	public $js = [
		'js/animation.js'
	];

	/**
	 * {@inheritdoc}
	 */
	public $depends = [
		'yii\web\JqueryAsset',
		'simialbi\yii2\animatecss\AnimateCssAsset'
	];
}