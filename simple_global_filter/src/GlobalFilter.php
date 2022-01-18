<?php

namespace Drupal\simple_global_filter;

use Drupal\Core\Entity\EntityTypeManager;

/**
 * Description of GlobalFilter.
 *
 * @author alberto
 */
class GlobalFilter {

  /**
   * The cache backend.
   */
  protected $cache;

  /**
   * The entity type manager.
   */
  protected $entity_type_manager;

  /**
   *
   */
  public function __construct(Cache $cache, EntityTypeManager $entity_type_manager) {
    $this->cache = $cache;
    $this->entity_type_manager = $entity_type_manager;
  }

  /**
   * Sets the global filter value.
   *
   * @param mixed $global_filter_id
   * @param mixed $value
   */
  public function set($global_filter_id, $value) {
    $data = $this->cache->get();
    if (!isset($data[$global_filter_id]) || $data[$global_filter_id] != $value) {
      $data[$global_filter_id] = $value;
      $this->cache->set($data);
      $cache = &drupal_static('global_filter_get');
      $cache[$global_filter_id] = $value;
    }
  }

  /**
   * Gets the value of the global filter.
   *
   * @param mixed $global_filter_id
   *
   * @return mixed
   */
  public function get($global_filter_id) {
    $cache = &drupal_static('global_filter_get');
    if (isset($cache[$global_filter_id])) {
      return $cache[$global_filter_id];
    }

    $value = NULL;
    $data = $this->cache->get();
    if (empty($data[$global_filter_id])) {
      // If the user did not select any value, return the default value.
      $value = \Drupal::entityTypeManager()
        ->getStorage('global_filter')->load($global_filter_id)->getDefaultValue();
    }
    else {
      $value = $data[$global_filter_id];
    }

    $cache[$global_filter_id] = $value;
    return $value;
  }

}
