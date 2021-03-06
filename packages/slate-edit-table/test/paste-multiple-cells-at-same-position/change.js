export default function(plugin, change) {
  const { value } = change

  // Copy the selection
  const copiedFragment = plugin.utils.getCopiedFragment(value)
  // Default copy in this case
  expect(copiedFragment).toBeTruthy()

  // Paste it
  change.collapseToAnchor()

  return plugin.changes.insertTableFragmentAtRange(
    change,
    change.value.selection,
    copiedFragment
  )
}
