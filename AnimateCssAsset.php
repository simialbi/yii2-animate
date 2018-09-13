<?php
/**
 * @package yii2-animate.css
 * @author Simon Karlen <simi.albi@gmail.com>
 */

namespace simialbi\yii2\animatecss;

use simialbi\yii2\web\AssetBundle;

/**
 * Asset bundle for animate.css
 * @package simialbi\yii2\animatecss
 */
class AnimateCssAsset extends AssetBundle {
	/**
	 * {@inheritdoc}
	 */
	public $sourcePath = '@bower/animate.css';

	/**
	 * {@inheritdoc}
	 */
	public $css = [
		'animate.css'
	];
}